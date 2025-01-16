import NavigationLink from "../../elements/generic/NavigationLink.tsx";

function NavBar(){
	return<nav className="navbar navbar-expand-lg bg-primary">
  		<div className="container-fluid">
    		<div className="collapse navbar-collapse" id="navbarNav">
     			<ul className="navbar-nav ms-auto">
        			<li className="nav-item">
          				<NavigationLink targetTo="/account/signin" label="Sign in"/>
        			</li>
        			<li className="nav-item">
						<NavigationLink targetTo="/account/signup" label="Sign up"/>
        			</li>
      			</ul>
    		</div>
  		</div>
	</nav> 
}

export default NavBar;