import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div
      style={{
        display: "grid",
        alignContent: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={() => router.push("/bug")}
        style={{ width: "20rem", marginLeft: "auto", marginRight: "auto" }}
      >
        Click Me To Reproduce Bug
      </button>
    </div>
  );
}
