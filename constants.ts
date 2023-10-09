import {
    Code,
    ImageIcon,
    LayoutDashboard,
    MessageSquare,
    Music,
    Settings,
    VideoIcon
} from "lucide-react";

export const MAX_FREE_TRIALS = 5

export const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        text_color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        text_color: "text-violet-500",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        text_color: "text-pink-500",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        text_color: "text-orange-700",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        text_color: "text-emerald-500",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        text_color: "text-green-700",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    },
];

export const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-700",
        bgColor: "bg-emerald-700/10",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-700",
        bgColor: "bg-green-700/10",
    },
];

export const homeAITools = [
    {
        index: 0,
        title: "Image Generation",
        desc: "Create stunning images in various resolutions for free. Effortlessly adjust image sizes to suit your needs, from high-definition to web-friendly, all at your fingertips. Say hello to versatile, cost-effective image generation!",
        src: "/homeImg.avif",
        href: "/dashboard"

    },
    {
        index: 1,
        title: "Chat with AI",
        desc: "CFrom quick answers to everyday questions to clearing up confusion, our chatbot is your go-to resource. Harness the power of AI for effortless problem-solving and enjoy a smoother, more informed daily routine with Genius!",
        src: "/homeChatbot.png",
        href: "/dashboard"

    },
    {
        index: 2,
        title: "Code Generation",
        desc: "Simplify your coding tasks. Effortlessly streamline your development process and enhance your understanding of the code. Stuck somewhere, leverage the power of AI!",
        src: "/homeCodes.jpg",
        href: "/dashboard"

    },
    {
        index: 3,
        title: "Music Generation",
        desc: "Generate music in different genres and styles. Create original tracks, from  soothing melodies to energetic beats, all for free. Unlock the Beethovan inside of you!",
        src: "/homeMusic.png",
        href: "/dashboard"

    },
    {
        index: 4,
        title: "Video Generation",
        desc: "Transform your ideas into captivating videos with ease. Just provide a simple prompt and description, and watch as our app generates stunning videos that bring your vision to life. Say goodbye to complex editing – create effortlessly with Genius!",
        src: "/homeVideo.png",
        href: "/dashboard"

    },
]