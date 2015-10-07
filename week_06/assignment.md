### Assignment week 6


These assignments are based on the sketches we made reverse-engineering the process of [Casey Reas](), outlined in his [compendium](). Starting with the last few "agents" programs we make, modify one of them in any *two* of the following ways.


 - Add color! Create an additional strategy for modulating the color or alpha of the lines/triangles made, depending either on noise, a sine wave, the index of the agent, or any combination of those.
 - Different render strategies -- draw quads or beziers instead of lines or triangles if 4 agents intersect.
 - Different spawning strategies.  Instead of spawning randomly, try spawning new agents from the center or from the corners, and instead of having random velocities, try constraining the initial velocities to go within some range of directions. Watch the [video]() for inspiration.
 - Termination strategies -- the way it is now, it will continue adding lines to the screen forever. One way to stop it would be to continuously shrink the radii of each of the agents down to 0 until they can no longer intersect and it will stop drawing at that point. Try letting the radius of each agent decay gradually to 0 over all the frames to achieve this.