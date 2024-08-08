export function HeaderImage({
  src,
  alt,
  height,
}: Readonly<{
  src: string;
  alt: string;
  height?: string;
}>) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: height || "400px",
        objectFit: "cover",
        borderRadius: 0,
      }}
    />
  );
}
