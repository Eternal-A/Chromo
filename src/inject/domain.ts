import { Inject } from './decorator';
import { IHandler } from './type';

function removeByClass(pattern: string, count = 0) {
    const elements = document.getElementsByClassName(pattern);
    if (elements.length === 0 && count !== 0) {
        setTimeout(() => removeByClass(pattern, count), 200);
        return;
    }
    console.log(`remove ${elements.length} element(s) by class: [${pattern}].`);
    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
    if (count - elements.length > 0) {
        setTimeout(() => removeByClass(pattern, count - elements.length), 200);
        return;
    }
}

@Inject('juejin.im')
class JueJin implements IHandler {
    init() {
        removeByClass('sidebar-block app-download-sidebar-block shadow');
        removeByClass('sidebar-entry shadow', 3);
        removeByClass('sidebar-block wechat-sidebar-block pure');
        removeByClass('index-book-collect');
    }
}
