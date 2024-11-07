import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Cta9Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Cta9 = (props: Cta9Props) => {
  const { heading, description, buttons, image } = {
    ...Cta9Defaults,
    ...props,
  } as Props;

  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-cover bg-center text-white" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for contrast */}
      
      <div className="relative container grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="mb-3 text-4xl font-bold leading-[1.2] text-white md:mb-4 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="text-white md:text-md">{description}</p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cta9;

export const Cta9Defaults: Cta9Props = {
  heading: "Medium length heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary-alt" }],
  image: {
    src: "/images/CTA.jpg",
    alt: "Relume placeholder image",
  },
};
