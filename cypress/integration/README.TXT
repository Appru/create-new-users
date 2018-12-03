In order to use this script you have to change the envoirment varibles. 
This makes the program more secure, so that password details arn't shared
around. Replacing the parts that say '1PASSWORD_NAME' with your own details


to do this open up the ternimal and type "nano ~/.bash_profile" 
this should open another window. This is where you type the varibles.

type
 " 
export CYPRESS_ACCOUNT_ID=[enter your supapass email]
export CYPRESS_ACCOUNT_PASSWORD=[enter your supapass password]
export CYPRESS_1PASSWORD_NAME=[enter your 1password email]
export CYPRESS_1PASSWORD_KEY=[enter your 1password key]
export CYPRESS_1PASSWORD_MASTER=[enter your 1password master password]

"

hit enter, exit the ternimal, restart cypress and the program should work
using all of your own creditioals