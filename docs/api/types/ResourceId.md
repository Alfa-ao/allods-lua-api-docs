---
outline: deep
---
# ResourceId

## Описание

Группа типов, являющихся идентификаторами ресурсов из базы. Один из пользовательских типов данных. Реализация каждого из типов данной группы - `userdata` с метатаблицей, соответствующей определенной категории ресурсов базы или `nil` (в случае отсутствия ресурса). Название типа и метатаблицы совпадают.

## Методы класса

- [ResourceId:GetInfo](/api/category/ResourceId/method.GetInfo.md) - возвращает информацию из файла ресурса.

- [ResourceId:GetPath](/api/category/ResourceId/method.GetPath.md) - возвращает путь к ресурсу.

- [ResourceId:GetInstanceId](/api/category/ResourceId/method.GetInstanceId.md) - возвращает уникальный идентификатор ресурса.

- [ResourceId:IsEqual](/api/category/ResourceId/method.IsEqual.md) - выполняет сравнение идентификаторов.

## Базовые типы ресурсов

### AliasVisObjectId

Идентификатор визуального объекта-обвязки представляет ресурс объекта в базе. Служит для реализации автоматической подмены ресурсов (для коллекционных изданий и т.п.).

---

### DecalObjectId

Идентификатор декола из базы.

---

### Sound2DId

Идентификатор звука из базы.

---

### TextureId

Идентификатор текстуры из базы.

---

### UITextureId

Идентификатор интерфейсной текстуры.

---

### VisActionId

Идентификатор визуального скрипта из базы.

---

### VisObjectId

Идентификатор визуального объекта из базы.

## Гейммеханические идентификаторы

::: info Config
Эти идентификаторы можно сохранять между сессиями.
:::

### [ActionGroupId](/api/types/ActionGroupId.md)

Идентификатор группы заклинаний.

---

### [AbilityId](/api/types/AbilityId.md)

Идентификатор пассивного умения из базы.

---

### [BattlegroundMarkId](/api/types/BattlegroundMarkId.md)

Команда в массовых сражениях.

---

### [BillingBonusId](/api/types/BillingBonusId.md)

Идентификатор платежного бонуса.

---

### [BuffId](/api/types/BuffId.md)

Идентификатор бафа, навешенного на игрока.

---

### [CharacterClassId](/api/types/CharacterClassId.md)

Идентификатор класса персонажа.

---

### [CheckRoomCategoryId](/api/types/CheckRoomCategoryId.md)

Категория гардероба.

---

### [CheckRoomCollectionId](/api/types/CheckRoomCollectionId.md)

Коллекция гардероба.

---

### [ComponentPropertyId](/api/types/ComponentPropertyId.md)

Идентификатор компонента для крафтинга (в данный момент только алхимия).

---

### [CurrencyCategoryId](/api/types/CurrencyCategoryId.md)

Описание категории альтернативной игровой валюты.

---

### [CurrencyId](/api/types/CurrencyId.md)

Описание альтернативной игровой валюты.

---

### [FactionId](/api/types/FactionId.md)

Фракция.

---

### [InstancedEventResourceId](/api/types/InstancedEventResourceId.md)

Идентификатор сражения.

---

### [InterfaceMapMarkerId](/api/types/InterfaceMapMarkerId.md)

Идентификатор маркера карты интерфейса.

---

### [ItemCategoryId](/api/types/ItemCategoryId.md)

Идентификатор категории предмета.

---

### [ItemId](/api/types/ItemId.md)

Идентификатор ресурса предмета в базе.

---

### [LootGroupId](/api/types/LootGroupId.md)

Вариант выбора лута, падающего на астральных островах.

---

### [MapModifierId](/api/types/MapModifierId.md)

Идентификатор модификатора карты.

---

### [MountTalentId](/api/types/MountTalentId.md)

Идентификатор таланта маунта.

---

### [PostTypeId](/api/types/PostTypeId.md)

Идентификатор раздела доски объявлений.

---

### [QuestId](/api/types/QuestId.md)

Идентификатор квеста, заданный идентификатором его квестового ресурса из базы. Поля, доступные в [ItemId:GetInfo](/api/category/ResourceId/method.GetInfo.md):

```
finishText: WString - финальное описание
startText: WString - стартовое описание
goal: WString - описание рекомендации
image: TextureId - иконка
name: WString - имя
isAutomatic: boolean - true если это дейлик, иначе false
questCategory: number(ENUM_QuestCategory) - категория квеста
```

- [ENUM_QuestCategory](/api/enums/enums.ENUM_QuestCategory.md)

---

### [RecipeId](/api/types/RecipeId.md)

Идентификатор рецепта из базы.

---

### [RewardsExchangeCategoryId](/api/types/RewardsExchangeCategoryId.md)

Категория наград для биржи наград.

---

### [SkillId](/api/types/SkillId.md)

Идентификатор умения.

---

### [SpellId](/api/types/SpellId.md)

Идентификатор заклинания (spell).

---

### [TierId](/api/types/TierId.md)

Тир награды для биржи наград.

---

### [WishmasterResourceId](/api/types/WishmasterResourceId.md)

Идентификатор ресурса исполнителя желаний.

---