import { it, expect } from "vitest";
export function test_list(list: List<number>): void {
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(2)).toEqual(9);
    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);

    list.append(11);
    expect(list.removeAt(1)).toEqual(9);
    expect(list.remove(9)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);

    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(2)).toEqual(5);
    expect(list.get(0)).toEqual(9);
    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);
}

export function test_list_edge_cases(list: List<number>): void {
    expect(list.length).toEqual(0);
    expect(list.get(0)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(undefined);
    expect(list.remove(42)).toEqual(undefined);

    list.append(1);
    expect(list.length).toEqual(1);
    expect(list.get(0)).toEqual(1);
    expect(list.get(1)).toEqual(undefined);
    expect(list.get(-1)).toEqual(undefined);

    expect(list.remove(1)).toEqual(1);
    expect(list.length).toEqual(0);

    list.prepend(10);
    expect(list.length).toEqual(1);
    expect(list.get(0)).toEqual(10);

    list.append(20);
    list.append(30);
    expect(list.length).toEqual(3);
    expect(list.removeAt(1)).toEqual(20);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(10);
    expect(list.get(1)).toEqual(30);

    expect(list.removeAt(10)).toEqual(undefined);
    expect(list.remove(100)).toEqual(undefined);

    list.removeAt(0);
    list.removeAt(0);
    expect(list.length).toEqual(0);
}
