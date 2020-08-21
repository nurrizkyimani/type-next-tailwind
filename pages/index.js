import Nav from '../components/nav';
import { auth, signInWithGoogle} from '../firebase';

export default function IndexPage() {
	return (
		<div>
			<Nav />
			<div className="py-20 m-auto px-20">
        <h1 className="text-5xl text-center text-accent-1">Next.js + Tailwind CSS</h1>
        
        

				<div>
					<button
						className="w-full py-3 bg-red-600 mt-4 text-white mb-10"
						onClick={() => {
							auth.signOut();
						}}
					>
						Sign out
					</button>
				</div>

				<div>
          <button
            onClick={() => {
              signInWithGoogle()
            }}
            className="bg-red-500 hover:bg-red-600 w-full py-2 text-white">Sign In with Google</button>
				</div>
			</div>
		</div>
	);
}
