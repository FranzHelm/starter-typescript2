import _ from "lodash";

export class Utils {
  public static kebabStyle(input: string): string {
    console.log(`kebabStyleAAAAAAA(${input})`);
    return _.kebabCase(input);
  }

}
