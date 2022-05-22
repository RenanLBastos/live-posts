import {Injectable} from "@angular/core";
import {Post} from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService {

  listOfPosts: Post[] = [
    new Post("Nature", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n" +
      "  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
      "  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n" +
      "  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg", "Arvore", "test@test.com", new Date()),

    new Post("Hampi", "Hampi (também conhecida por Cidade da Victória), a capital do Império Vijayanagara de 1336 a 1565, ocupa uma área de cerca de 41,8 quilômetros quadrados [2] no vale do Tungabhadra, em Carnataca, Índia; sendo que a zona-tampão chega a aproximadamente 194,5 quilômetros quadrados[3]. Foi declarada Património Mundial da Unesco em 1987.[4]",
      "https://www.karnatakatourism.org/wp-content/uploads/2020/05/Hampi.jpg", "Altar", "test@test.com", new Date()),

    new Post("Araku Valley", "Araku Valley is a hill station in Alluri Sitharama Raju district in the Indian state of Andhra Pradesh, lying 111 km west of Visakhapatnam city. This place is often referred to as Ooty of Andhra. It is a valley in the Eastern Ghats inhabited by different tribes, mainly Araku Tribes.",
      "https://s3.scoopwhoop.com/anj/asfaeasdsdawd/458111721.jpg", "monte", "test@test.com", new Date())
  ];

  //facility 1
  getPosts() {
    return this.listOfPosts;
  }

  //facility 2
  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }

  //facility 3
  addPost(post: Post) {
    this.listOfPosts.push(post);
  }

  //facility 4
  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }
}
