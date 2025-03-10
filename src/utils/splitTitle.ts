// Split the title string into two lines
export function splitTitle(title: string): Array<string> {
    if (typeof title !== 'string' || title.length === 0) {
      return [title, ""];
    }

    let titleObj: Array<string> = title.split(' ');
    let titleTop: Array<string> = [];
    let titleBottom: Array<string> = [];

    while (titleObj.length > 0 ) {
        // As far as possible, split the text evenly between the two lines
        if (titleTop.join().length <= titleBottom.join().length) {
            let word: string | undefined = titleObj.shift();
            if (typeof word != 'undefined') {
                titleTop.push(word);
            }
        } else {
            let word: string | undefined = titleObj.pop();
            if (typeof word != 'undefined') {
                titleBottom.push(word);
            }
        }
    }

    return [titleTop.join(" "), titleBottom.reverse().join(" ")];
  }
  