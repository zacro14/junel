import { header } from "data/header";

export const Header = () => {
  return (
    <section className="h-screen grid items-center justify-center bg-main">
      <nav className="grid grid-cols-2 grid-rows-2 items-center justify-centers gap-5 cursor-pointer ">
        {header.map(({ name }) => (
          <div
            key={name}
            className="h-52 w-52 bg-secondary flex items-center justify-center rounded-2xl select-none"
          >
            <h1 className="text-stroke text-xl uppercase">{name}</h1>
          </div>
        ))}
        \
      </nav>
    </section>
  );
};
