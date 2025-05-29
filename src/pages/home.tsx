import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function HomePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 overflow-y-auto h-screen">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Nosotros somos&nbsp;</span>
          <span className={title({ color: "red_dark" })}>Kumiho.&nbsp;</span>
          <br />
          <div className={subtitle({ class: "mt-4", color: "red_dark" })}>
            "Más que esports"
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-between h-screen">
        <div>
          <h1>Esta es otra sección</h1>
        </div>

      </section>
    </DefaultLayout>
  );
}
