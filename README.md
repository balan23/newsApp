# NewsAppBoilerplateJava

## Project Repository

git clone "https://gitlab-cts.stackroute.in/Manobalan.A/NewsApplication-Java-BoilerPlate.git"

## Backend Local setup
1. Navigate to server folder
    cd NewsApplication-Java-BoilerPlate/Server/

2. Run application as spring boot


## Authentication server setup

1. Naviagate to AuthenticateService folder
    cd NewsApplication-Java-BoilerPlate/AuthenticateService/
2. Run project as spring boot

##UI  setup
1. Navigate to UI  folder
    cd UI
2.Install  angular and  dependencies with npm install
3.Build app     ng build 
4.Run application    ng serve --open
## Application Info
User Types:
1.Admin - Admin can add news from NewsAPI to Application News there he can update the description also.
2.User  - User can see application news and he can addd to his wishlist. But with read only access.
User with userid "admin" will be assigned with Admin role and previlages.
JWT tokens are used for security