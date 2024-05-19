import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoTask from "./components/TodoTask";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen  bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">Todo App</h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <AddTask />
          <TodoTask />
        </div>
      </div>
    </main>
  );
};

export default Home;
