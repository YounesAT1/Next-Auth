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

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(50),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("clicked");
    console.log(values);
    form.reset();
  };

  return (
    <main className="bg-white sm:h-[30rem] sm:w-[30rem] rounded-xl h-[30rem] w-[20rem] px-[2rem] sm:py-[2rem] py-[4rem] sm:px-[3rem] flex flex-col items-center justify-center">
      <h1 className="font-bold text-center sm:mb-[3rem] sm:text-3xl text-xl mb-[2rem]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
          Log in
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
            Sign up
          </Button>
        </form>
      </Form>
      <div
        className="flex sm:items-center sm:justify-center sm:flex-row flex-col
       mt-4 text-center sm:gap-1"
      >
        <p>You do not have an account?</p>
        <Link
          className="text-blue-500 hover:text-blue-600 font-semibold"
          href="/"
        >
          sign up
        </Link>
      </div>
    </main>
  );
}
