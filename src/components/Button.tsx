type Props = {
  children: string;
  styles: string;
};

const Button = ({ children, styles }: Props) => {
  return (
    <button
      className={`
        py-5
        px-7
        bg-[#94bdcbba]
        rounded-lg
        border-2
        border-[#99cfe1]
        text-xl
        w-[20rem]
        ${styles}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
