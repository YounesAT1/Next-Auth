"use client";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, Mail, User, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Loader from "@/components/Loader";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters long",
    })
    .max(50),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(50),
});

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = async (
    values: z.infer<typeof formSchema>,
    e: any
  ) => {
    setIsLoading(true);
    e.preventDefault();

    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(values.email)) {
      toast.error("Invalid email address");
    }

    try {
      const res = await axios.post("/api/signup", values);

      if (res.status === 200 || res.status === 201) {
        console.log("sign up seccessfully");
        router.push("/login");
        toast.success("Sign up seccessfully");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.error || "An error occurred");
    } finally {
      setIsLoading(false);
      form.reset();
    }
  };

  return (
    <main className="bg-white sm:h-[35rem] sm:w-[30rem] rounded-xl h-[37rem] w-[18rem] px-[2rem] sm:py-[2rem] py-[4rem] sm:px-[3rem] flex flex-col items-center justify-center">
      <h1 className="font-bold text-center sm:mb-[3rem] sm:text-3xl text-xl mb-[2rem]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
          Sign up
        </span>
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="flex flex-col w-full"
          autoComplete="off"
          method="POST"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel htmlFor="name" className="text-gray-800">
                  Username :
                </FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="pr-10"
                      id="name"
                      type="text"
                    />
                    <User className="absolute top-1/2 right-2 transform -translate-y-1/2 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel htmlFor="email" className="text-gray-800">
                  Email :
                </FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      placeholder="John@gmail.com"
                      {...field}
                      className="pr-10"
                      id="email"
                      type="email"
                    />
                    <Mail className="absolute top-1/2 right-2 transform -translate-y-1/2 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel htmlFor="password" className="text-gray-800">
                  Password :
                </FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      placeholder="*******"
                      {...field}
                      className="pr-10"
                      id="password"
                      type={showPassword ? "password" : "text"}
                    />
                    {showPassword ? (
                      <EyeOff
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-muted-foreground"
                        onClick={handleTogglePassword}
                      />
                    ) : (
                      <Eye
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-muted-foreground"
                        onClick={handleTogglePassword}
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full rounded-lg text-white bg-blue-500 hover:bg-blue-600"
            type="submit"
          >
            {isLoading ? <Loader /> : "Sign up"}
          </Button>
        </form>
      </Form>
      <div
        className="flex sm:items-center sm:justify-center sm:flex-row flex-col
       mt-4 text-center sm:gap-1"
      >
        <p>Already have an accout?</p>
        <Link
          className="text-blue-500 hover:text-blue-600 font-semibold"
          href="/login"
        >
          Log in
        </Link>
      </div>
    </main>
  );
}
