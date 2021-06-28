<script>
import Memo from "~/components/memo.svelte";
import { code } from "./counter-machine";
import Content from "./_counter.svelte";
</script>

<Memo {code}>
  <Content />
</Memo>
