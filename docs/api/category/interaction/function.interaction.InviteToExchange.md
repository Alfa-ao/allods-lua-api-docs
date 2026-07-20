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
interaction.InviteToExchange( unit.GetName( avatar.GetTarget() ) )
```

## Смотрите также
- [unit.GetName](function.unit.GetName)
- [avatar.GetTarget](function.avatar.GetTarget)