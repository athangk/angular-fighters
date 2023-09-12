#### git clone
#### npm install
#### ng serve --open

# Fighters n Arena
Angular project with ngrx store and effects. Api calls with in memory service and drag and drop of items.

The fighters are displayed from an api call and then added to the ngrx store.\
User can add them to the arena where they can start the fight.\
The fight is based on a random pick that chooses one of their stats, kick, fist, or weapon.\
Drag and drop is available in the arena, where it can change the order of the fight and the outcome as well.



#### - Add fighters to arena
Fighters are added to the arena with the add button, the number of fighters is displayed on the toolbar badges.
<p float=left>
<img src="https://github.com/athangk/angular-fighters/blob/main/Part%231_13.gif" width="640">
  </p>

  #### - Drag order of fighters and fight
Fighters order can change by drag and drop. The stat that each round of the fight is based, is shown on the winner result.
<p float=left>
<img src="https://github.com/athangk/angular-fighters/blob/main/Part%231_1_8.gif" width="640">
  </p>

#### - Create a new custom fighter
A new custom fighter can be added, with name, image, stats and its unique story.
<p float=left> 
<img src="https://github.com/athangk/angular-fighters/blob/main/Part%231_14.gif" width="640">
  </p>

#### - Routing with fighter Id and display their story
A route to the fighter unique page with their story shown
<p float=left>
<img src="https://github.com/athangk/angular-fighters/blob/main/Part%231_3_2.gif" width="640">
  </p>


#### - Remove a fighter and fight with the rest
In the arena the fighters can be removed, sending them back to the fighters list as shown in the toolbar badges.
<p float=left>
<img src="https://github.com/athangk/angular-fighters/blob/main/Part%231_4_4.gif" width="640">
  </p>
