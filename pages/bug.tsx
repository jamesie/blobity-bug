import { useRouter } from "next/router";

export default function Bug() {
  const router = useRouter();
  return (
    <div
      style={{
        display: "grid",
        alignContent: "center",
        height: "100vh",
      }}
    >
      I am bugged?
    </div>
  );
}
