import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import NormalCard from "../components/NormalCard";
import StepCard from "../components/StepCard";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FeaturedPost from "../components/FeaturedPost";

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];

const AuditingPage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container my={5}>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              sx={{ height: 300 }}
              image="https://cdn.discordapp.com/attachments/1083609995142254682/1087551672919793694/AdobeStock_272669935-scaled.jpeg"
            />
            <CardContent>
              <Grid item mb={3}>
                <Typography variant="h3">Blog Title</Typography>
              </Grid>
              <Grid item my={3}>
                <Typography variant="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Grid>
              <Grid item my={3}>
                <Typography variant="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Grid>
              <Grid item my={3}>
                <Typography variant="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Grid>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button
                variant="text"
                color="primary"
                size="small"
                style={{ marginLeft: 20 }}
              >
                Primary
              </Button>
              <Button variant="text" color="secondary" size="small">
                Secondary
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} my={5}>
          <Typography variant="h3" textAlign={"center"}>
            FEATURED POSTS
          </Typography>
          <Grid container spacing={4} mt={2}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} my={1}>
          <Typography variant="h3" textAlign={"center"}>
            OUR AUDIT SERVICES
          </Typography>
        </Grid>
        <Grid item xs={12} my={1}>
          <StepCard
            title="FIRST PARTY (INTERNAL) AUDITS"
            text="Required annually in order to keep your certification. Our experts can conduct your internal audits to ensure all issues are found prior to your certification audit and to ensure strength of your system. At QSE we believe in training, so we can also bring your QA team along to train them while we conduct your internal audit. This will leave your team with the skills to take over this task in the following years saving your company money."
          />
        </Grid>
        <Grid item xs={12} my={1}>
          <StepCard
            title="SECOND PARTY AUDITS"
            text="Required annually in order to keep your certification. Our experts can conduct your internal audits to ensure all issues are found prior to your certification audit and to ensure strength of your system. At QSE we believe in training, so we can also bring your QA team along to train them while we conduct your internal audit. This will leave your team with the skills to take over this task in the following years saving your company money."
          />
        </Grid>
        <Grid item xs={12} my={1}>
          <StepCard
            title="THIRD PARTY AUDITS"
            text="Third-party ISO audits are normally conducted in 2 stages prior to ISO Certification. Stage 1 ISO Audit or Desk Audit. This ISO audit is essentially to verify if the documentation is adequate to meet the requirements of the standards for ISO certification or Sector certification to that standard. Desk Audit is a precursor to ISO certification. Stage 2 ISO audit is the final ISO audit prior to ISO certification or selected sector certification. If a facility passes this ISO audit then the facility will be recommended for certification."
          />
        </Grid>
        <Grid item xs={12} my={1}>
          <StepCard
            title="SUPPLIER AUDIT"
            text="Audit your supply chain against a list of your requirements. We can develop a checklist for your, or utilize one of your existing checklists. We have reach across 5 countries"
          />
        </Grid>
        <Grid item xs={12} my={1}>
          <StepCard
            title="GAP AUDIT"
            text="A customized audit against any standard you would like. This can be conducted at any point of your certification journey. If you are considering a standard but are unsure of the complexity or next steps, a gap audit will identify areas you already have in place and provide you a road map on what next steps you must complete for certification. A Gap audit just before your certification audit is also a great tool to ensure you are going to pass that certification audit. Finally, it is a great tool to utilize to keep your management system improving and adapting as your company grows."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuditingPage;
