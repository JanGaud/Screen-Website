<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';

</script>

<p>
  <span>Create</span> <span>a</span> <span>3d</span> <span>text</span> <br> <span>hover</span> <span>effect</span>
</p>

<style>
    p {
  text-align: center;
  margin-top: 60px;
  font: 5em/1em 'Oswald', sans-serif;
  text-transform: uppercase;
  text-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black, 5px 5px black, 6px 6px black, 7px 7px 5px rgba(0,0,0,0.5);
}

span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: all 0.2s ease-in-out;
}

span:nth-child(2):hover {
  color: #4aacb8;
  top: 2px;
  left: 2px;
  text-shadow: 1px 1px #1b818d, 2px 2px #1b818d, 3px 3px #1b818d, 4px 4px #1b818d, 4px 4px 5px rgba(0,0,0,0.5);
}

span:nth-child(3):hover {
  color: #49b8ff;
  top: -8px;
  left: -8px;
  text-shadow: 1px 1px #116295, 2px 2px #116295, 3px 3px #116295, 4px 4px #116295, 5px 5px #116295, 6px 6px #116295, 7px 7px #116295, 8px 8px #116295, 9px 9px #116295, 10px 10px #116295, 11px 11px #116295, 12px 12px #116295, 13px 13px #116295, 14px 14px 5px rgba(0,0,0,0.5);
}

span:nth-child(4):hover {
  color: #cc3fd9;
  top: 4px;
  left: 4px;
  text-shadow: 1px 1px #870d92, 2px 2px #870d92, 2px 2px 3px rgba(0,0,0,0.5);
}

span:nth-child(6):hover {
  color: #d34a87;
  top: -10px;
  left: -10px;
  text-shadow: 1px 1px #8b1b4d, 2px 2px #8b1b4d, 3px 3px #8b1b4d, 4px 4px #8b1b4d, 5px 5px #8b1b4d, 6px 6px #8b1b4d, 7px 7px #8b1b4d, 8px 8px #8b1b4d, 9px 9px #8b1b4d, 10px 10px #8b1b4d, 11px 11px #8b1b4d, 12px 12px #8b1b4d, 13px 13px #8b1b4d, 14px 14px #8b1b4d, 15px 15px #8b1b4d, 16px 16px #8b1b4d, 16px 16px 8px rgba(0,0,0,0.5), 17px 17px 10px rgba(0,0,0,0.3), 18px 18px 5px rgba(0,0,0,0.5) ;
}

span:nth-child(7):hover {
  color: #d13153;
  text-shadow: 1px 1px #83142c, 2px 2px #83142c, 3px 3px #83142c, 4px 4px #83142c, 5px 5px #83142c, 6px 6px #83142c, 7px 7px #83142c, 8px 8px #83142c, 9px 9px 3px rgba(0,0,0,0.5);
}

span:hover {
  color: #acd335;
  text-shadow: 1px 1px #749218, 2px 2px #749218, 3px 3px #749218, 4px 4px #749218, 5px 5px #749218, 6px 6px #749218, 7px 7px #749218, 8px 8px #749218, 9px 9px 3px rgba(0,0,0,0.5);
  top: -2px;
  left: -2px;
 transition: all 0.1s ease-in-out;
}
</style>