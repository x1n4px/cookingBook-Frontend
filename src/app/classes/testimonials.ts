import {Recipe} from "./recipe";

export class Testimonials {
  public id: number | undefined;
  public name: string | undefined;
  public testimonial: string | undefined;
  public recipe: Recipe | undefined;
  public flavor: number | undefined;
  public texture: number | undefined;
  public presentation: number | undefined;
}
