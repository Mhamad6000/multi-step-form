// using @/ for alias path is usefull because when we use alias path, we can easily change the path in tsconfig.json
import Form from "@/app/components/form/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center md:items-center md:p-8 lg:p-10">
      <Form />
    </main>
  );
}
