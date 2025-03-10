import * as React from "react";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const RedesList = () => {
  return (
    <Box sx={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      <Link href="https://www.facebook.com/sofiamelina.alcaraz/" passHref>
        <IconButton color="primary" aria-label="Facebook">
          <FacebookIcon />
        </IconButton>
      </Link>
      <Link href="/otra-pagina" passHref>
        <IconButton color="primary" aria-label="Instagram">
          <InstagramIcon />
        </IconButton>
      </Link>
      <Link href="https://www.linkedin.com/in/sofia-alcaraz/" passHref>
        <IconButton color="primary" aria-label="linkedin">
          <LinkedInIcon />
        </IconButton>
      </Link>
      <Link href="https://github.com/sofiAlcaraz" passHref>
        <IconButton color="primary" aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
      </Link>
      <Link href="https://gitlab.com/users/sofiialcaraz16" passHref>
        <IconButton color="primary" aria-label="GitLab">
          <Image
            src="/images/git-lab2.png"
            width={20}
            height={20}
            alt="GitLab"
          />
        </IconButton>
      </Link>
    </Box>
  );
};

export default RedesList;
