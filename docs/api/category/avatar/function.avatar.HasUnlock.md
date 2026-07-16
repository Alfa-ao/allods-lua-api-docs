# avatar.HasUnlock
Определяет наличие указанного анлока у аватара.
## Описание
```lua
avatar.HasUnlock( unlockId: UnlockId ): boolean
```
Функция проверяет, разблокирована ли у аватара возможность с заданным идентификатором. Возвращает логическое значение, указывающее на наличие или отсутствие данного анлока.

## Список параметров
- **`unlockId`** (`UnlockId`)
Идентификатор возможности (анлока), наличие которой необходимо проверить.

## Возвращаемые значения
`boolean` — `true`, если у аватара имеется указанный анлок, и `false` в противном случае.

## Примеры
### Проверка наличия анлока
```lua
local unlockId = 12345
local hasUnlock = avatar.HasUnlock( unlockId )
```

## Смотрите также
- [avatar.GetInfiniteUnlocks](avatar.GetInfiniteUnlocks)
- [avatar.GetTemporaryUnlocks](avatar.GetTemporaryUnlocks)
- [avatar.GetUnlockInfo](avatar.GetUnlockInfo)