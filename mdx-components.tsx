// @ts-nocheck
import { Box, Divider, Link, Typography } from "@mui/material";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <Typography variant="h1" {...props} />,
    h2: (props) => <Typography variant="h2" {...props} />,
    h3: (props) => <Typography variant="h3" {...props} />,
    h4: (props) => <Typography variant="h4" {...props} />,
    h5: (props) => <Typography variant="h5" {...props} />,
    h6: (props) => <Typography variant="h6" {...props} />,
    p: (props) => <Typography variant="body1" {...props} />,
    a: (props) => <Link {...props} />,
    hr: (props) => <Divider />,
    pre: (props) => <pre {...props} />,
    blockquote: (props) => (
      <Box
        sx={{
          borderLeft: "5px solid",
          borderColor: "primary.main",
          pl: 2,
          ml: 2,
        }}
        {...props}
      />
    ),
    li: (props) => <Typography component="li" {...props} />,
  };
}
