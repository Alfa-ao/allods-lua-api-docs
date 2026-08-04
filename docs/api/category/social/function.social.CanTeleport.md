# social.CanTeleport

Проверяет возможность перемещения к побратиму.

## Описание

```lua
social.CanTeleport(): boolean
```

Функция возвращает статус возможности перемещения к побратиму.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает boolean - true, если можно переместиться к побратиму.

## Примеры

### Проверка возможности и выполнение перемещения

```lua
if social.CanTeleport() then
    social.TeleportToBestFriend()
end
```

::: info Описание примера
В примере проверяется возможность перемещения к побратиму с помощью функции `social.CanTeleport`. Если перемещение возможно, вызывается функция `social.TeleportToBestFriend` для выполнения перемещения.
:::

## Смотрите также

- [social.TeleportToBestFriend](/api/category/social/function.social.TeleportToBestFriend.md)