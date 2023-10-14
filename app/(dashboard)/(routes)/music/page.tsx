"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import * as z from "zod";
import Heading from "@/components/Heading";
import { Music } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/Loader";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";

const MusicPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [music, setMusic] = useState<string>();

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
      setMusic(undefined);
      const response = await axios.post("/api/music", values);
      console.log(response);

      setMusic(response.data.audio);

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
      // Check page.tsx in conversation
      router.refresh();
    }
    console.log(values);
  };

  return (
    <div>
      <Heading
        title="Music Generation"
        description="Turn your prompt into music."
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
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
                        placeholder="Piano solo"
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
          {!music && !isLoading && <Empty label="No music generated." />}
          {music && (
            <audio controls className="w-full mt-8">
              <source src={music} />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
