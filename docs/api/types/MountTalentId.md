# MountTalentId

Идентификатор таланта маунта. Пользовательский тип данных (см. также LuaApiTypes). Один из типов группы `ResourceId`.

Поля, доступные в `MountTalentId:GetInfo()`

- **`price`** (`number`) - стоимость при выборе.

- **`unlock`** (`UnlockId`) - идентификатор ресурса анлока для получаения данного таланта.

- **`unlockItems`** (`table`) - table of ItemId. Предвметы разблокирующий данный талант.


Смотрите также:

- [avatar.GetUnlockInfo( unlockId )](/api/category/avatar/function.avatar.GetUnlockInfo.md)
- [mount.GetTalentInfo( mountTalentId )](/api/category/mount/function.mount.GetTalentInfo.md)