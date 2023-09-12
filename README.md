#### git clone
#### npm install
#### ng serve --open

# Fighters n Arena
Angular project with ngrx store and effects. 

Fighters displayed from api call and then added by user action to the arena where they can fight.\
The fight is based on a random pick, that chooses one of their stats (kick, fist, weapon)\
Drag and drop is available that changes the order of the fight.


#### - Add fighters to arena
Fighters are added to the arena with the add button, the number of fighters is displayed on the toolbar
<p float=left>
<img src="https://github.com/athangk/angular-fighters/blob/main/Part%231_13.gif" width="640">
  </p>

  #### - Drag order of fighters and fight
Fighters can be drag and that changes the order of the fight. The fight is 1 by 1, till there is a final winner. The stat that the fight is based is shown on the results
<p float=left>
<img src="https://github.com/athangk/angular-fighters/blob/main/Part%231_1_8.gif" width="640">
  </p>

#### - Create a new custom fighter
A new custom fighter can be added, with name, image, stats and story
<p float=left> 
<img src="https://github.com/athangk/angular-fighters/blob/main/Part%231_14.gif" width="640">
  </p>

#### - Routing with fighter Id and display their story
A route to the fighter unique page with their story shown
<p float=left>
<img src="https://github.com/athangk/angular-fighters/blob/main/Part%231_3_2.gif" width="640">
  </p>


#### - Remove a fighter and fight with the rest
In the arena before the fight the fighters can be removed and thrown back to the fighters list as shown in the toolbar badges.
<p float=left>
<img src="https://github.com/athangk/angular-fighters/blob/main/Part%231_4_4.gif" width="640">
  </p>
