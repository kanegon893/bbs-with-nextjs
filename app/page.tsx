import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";
import Image from "next/image";
import { Input } from "postcss";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-3 px=4 py=4 gap=4">
      <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam animi beatae nostrum distinctio expedita ipsum. Praesentium suscipit nihil deserunt rem aperiam nostrum culpa! Necessitatibus ratione id sed voluptates dignissimos?
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link  href={"/bbs-posts/1"} />Read More<Link/>
      </CardFooter>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam animi beatae nostrum distinctio expedita ipsum. Praesentium suscipit nihil deserunt rem aperiam nostrum culpa! Necessitatibus ratione id sed voluptates dignissimos?
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link  href={"/bbs-posts/1"} />Read More<Link/>
      </CardFooter>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam animi beatae nostrum distinctio expedita ipsum. Praesentium suscipit nihil deserunt rem aperiam nostrum culpa! Necessitatibus ratione id sed voluptates dignissimos?
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link  href={"/bbs-posts/1"} />Read More<Link/>
      </CardFooter>
    </Card>
    </main>
  );
}
