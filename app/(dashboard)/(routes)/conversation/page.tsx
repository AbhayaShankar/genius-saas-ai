"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import * as z from "zod";
import Heading from "@/components/Heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChatCompletionRequestMessage } from "openai";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/Loader";
import { cn } from "@/lib/utils";
import { BotAvatar, UserAvatar } from "@/components/Avatars";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";

const ConversationPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  // form using zod and using useForm() hook from react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);
      console.log(messages);

      form.reset();
    } catch (error: any) {
      //TODO: Catch 504 Gateway Timeout Error.
      if (error?.response?.status === 504) {
        toast(
          "Gateway Timeout Error, Deployed on Vercel Hobby Plan! (10s timeout allowed), Refresh, check your network connection and try again...",
          {
            icon: "❌",
            style: {
              borderRadius: "8px",
              background: "#333",
              color: "#fff",
            },
          }
        );
      }
      // TODO: Open pro model
      else if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast("Something Went Wrong!", {
          icon: "❌",
          style: {
            textAlign: "center",
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        });
      }
      console.log(error);
    } finally {
      //TODO: Why refresh will come back to this
      // When we request/hit any api, the data comes and get rendered. And our apiLimit counter whihc we have created is also updated. But the catch is the counter is not rendered yet on the client side. It is updated on the server. So inorder to get the server data back, we do router.refresh(), And this will update all the server components with the latest data.
      router.refresh();
    }
    console.log(values);
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Experience and Leverage smart conversation with AI."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-2 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  // col-span-10 : reduces the visibility of the text inside input form- try to change the value to see the effect.
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none  focus-visible:ring-transparent form-visible:ring-0"
                        disabled={isLoading}
                        placeholder="How to become a good frontend developer ?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted ">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversations started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start rounded-lg gap-x-4",
                  message.role === "user"
                    ? "bg-white border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
