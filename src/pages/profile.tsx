import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function ProfilePage () {
return (
    <DefaultLayout>
          <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 overflow-y-auto h-screen">
            <div className="inline-block max-w-lg text-center justify-center">
              <span className={title()}>Mi perfil</span>
            </div>
          </section>

        </DefaultLayout>
)
};

