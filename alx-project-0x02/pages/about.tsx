import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>About Page</h1>
        <p>This is the About page.</p>
        <div className="space-x-4 mt-4">
          <Button size="small" shape="rounded-sm">
            Small Rounded-sm
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium Rounded-md
          </Button>
          <Button size="large" shape="rounded-full">
            Large Rounded-full
          </Button>
        </div>
      </main>
    </>
  );
}
