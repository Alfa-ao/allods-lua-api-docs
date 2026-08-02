# interaction.InviteToExchange
Приглашает игрока к торговле (обмену вещами).

## Описание

```lua
interaction.InviteToExchange( invitedName: WString )
```

Функция отправляет приглашение указанному игроку на торговлю (обмену вещами).

## Список параметров

- **`invitedName`** (`WString`) - Имя приглашенного игрока для обмена.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Приглашение цели к обмену
```lua
interaction.InviteToExchange( object.GetName( avatar.GetTarget() ) )
```

## Смотрите также

- [object.GetName](/api/category/object/function.object.GetName.md)
- [avatar.GetTarget](/api/category/avatar/function.avatar.GetTarget.md)