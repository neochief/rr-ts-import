import {type Plugin} from 'vite';

export function testPlugin(): Plugin {
    return {
        name: 'test',
        buildStart() {
        }
    }
}
