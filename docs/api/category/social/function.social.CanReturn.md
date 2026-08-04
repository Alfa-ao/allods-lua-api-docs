# social.CanReturn

Проверяет возможность возвращения от побратима.

## Описание

```lua
social.CanReturn(): boolean
```

Функция возвращает статус возможности возвращения от побратима назад.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если можно вернуться от побратима.

## Примеры

### Возврат от побратима при возможности

```lua
if social.CanReturn() then
    social.ReturnFromBestFriend()
end
```

::: info Описание примера
В примере проверяется возможность возвращения от побратима с помощью функции `social.CanReturn()`. Если условие выполняется, вызывается функция `social.ReturnFromBestFriend()` для выполнения возврата.
:::

## Смотрите также

- [social.ReturnFromBestFriend](/api/category/social/function.social.ReturnFromBestFriend.md)