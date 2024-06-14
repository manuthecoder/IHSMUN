export function HeaderImage({
  src,
  alt,
}: Readonly<{
  src: string;
  alt: string;
}>) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "400px",
        objectFit: "cover",
        borderRadius: 0,
      }}
    />
  );
}
