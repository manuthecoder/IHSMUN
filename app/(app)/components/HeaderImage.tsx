export function HeaderImage({
  src,
  alt,
  height,
  darken,
}: Readonly<{
  src: string;
  alt: string;
  height?: string;
  darken?: boolean;
}>) {
  return (
    <div style={{ background: "black" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: height || "400px",
          objectFit: "cover",
          borderRadius: 0,
          opacity: darken ? 0.5 : 1,
        }}
      />
    </div>
  );
}
