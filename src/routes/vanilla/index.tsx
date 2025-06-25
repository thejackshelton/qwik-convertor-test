import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./vanilla.css?inline";

export default component$(() => {
  // this uses our css styles
  useStyles$(styles);

  return (
    <div>Vanilla</div>
  )
});