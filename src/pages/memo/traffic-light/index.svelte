<script>
import Memo from "~/components/memo.svelte";
import { code } from "./traffic-light-machine";
import TrafficLight from "./_traffic-light.svelte";
</script>

<Memo {code}>
  <TrafficLight />
</Memo>
