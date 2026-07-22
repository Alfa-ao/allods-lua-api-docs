# matchMaking.IsAvatarJoinedAnySpecificEvent

Определяет, стоит ли аватар в очереди на PVE или PVP инстанс-ивент.

## Описание

```lua
matchMaking.IsAvatarJoinedAnySpecificEvent( checkPVE: boolean ): boolean
```

Функция проверяет нахождение аватара в очереди на инстанс-ивент заданного типа. Параметр `checkPVE` определяет тип события: при значении `true` проверяется очередь на PVE-ивент, при значении `false` - на PVP-ивент.

## Список параметров

- **`checkPVE`** (`boolean`) - Флаг типа проверяемого события. При значении `true` проверяется наличие аватара в очереди на PVE-ивент, при значении `false` - на PVP-ивент.

## Возвращаемые значения

Возвращает `boolean` - `true`, если аватар присоединен к очереди на хотя бы один инстанс-ивент выбранного типа, и `false` в противном случае.

## Примеры

### Проверка статуса очереди

```lua
if matchMaking.IsAvatarJoinedAnySpecificEvent( true ) then
    LogInfo( "Joined to PVE event" )
end

if matchMaking.IsAvatarJoinedAnySpecificEvent( false ) then
    LogInfo( "Joined to PVP event" )
end
```