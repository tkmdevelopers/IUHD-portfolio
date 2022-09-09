import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "jvrnsq9l",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skyoaHX4LOYnjDr0ckCWEfUUa75KOtg7P2L5XpLSeh9Y7bmUJqlhjdRUyIPj6S9Cl9AXRQghotEMVARm8YAk4s2WLX0qJZMExixkhLBlAtnfvLQi8Sv2soybxE6MjqXD1WOj3F6ldzPPUlsLoJ3rvECXnylQOnDIkP7yWuPErfBpFuUlnGj0",
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
