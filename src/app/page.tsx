// using @/ for alias path is usefull because when we use alias path, we can easily change the path in tsconfig.json
import Form from "@/app/components/home/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center p-10">
      <Form />
    </main>
  );
}
