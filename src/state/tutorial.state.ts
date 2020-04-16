import { Tutorial } from 'src/models/tutorial.model';



export class TutorialState {
  tutorial: Tutorial[]
}

@State<TutorialState>({
  name: 'tutorial'
})
