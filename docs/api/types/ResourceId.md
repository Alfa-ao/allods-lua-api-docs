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

### [AliasVisObjectId](/api/types/AliasVisObjectId.md)

Идентификатор визуального объекта-обвязки представляет ресурс объекта в базе. Служит для реализации автоматической подмены ресурсов (для коллекционных изданий и т.п.).

---

### [DecalObjectId](/api/types/DecalObjectId.md)

Идентификатор декола из базы.

---

### [Sound2DId](/api/types/Sound2DId.md)

Идентификатор звука из базы.

---

### [TextureId](/api/types/TextureId.md)

Идентификатор текстуры из базы.

---

### [UITextureId](/api/types/UITextureId.md)

Идентификатор интерфейсной текстуры.

---

### [VisActionId](/api/types/VisActionId.md)

Идентификатор визуального скрипта из базы.

---

### [VisObjectId](/api/types/VisObjectId.md)

Идентификатор визуального объекта из базы.




## Гейммеханические идентификаторы

::: info Config
Эти идентификаторы можно сохранять между сессиями.
:::

### [AbilityId](/api/types/AbilityId.md)

Идентификатор пассивного умения из базы.

---

### [ActionGroupId](/api/types/ActionGroupId.md)

Идентификатор группы заклинаний.

---

### [AstralSectorId]

Идентификатор астрального сектора.

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

### [CharacterFormId]

Идентификатор ресурса формы класса аватара игрока.

---

### [CombatTagId]

Идентификатор эффекта наложенного на игрока в бою.

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

### [LifestyleCategoryId](/api/types/LifestyleCategoryId.md)

Категория гардероба.

---

### [LifestyleCollectionId](/api/types/LifestyleCollectionId.md)

Коллекция гардероба.

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

Идентификатор задания.

---

### [RecipeId](/api/types/RecipeId.md)

Идентификатор рецепта из базы.

---

### [SkillId](/api/types/SkillId.md)

Идентификатор умения.

---

### [SpellId](/api/types/SpellId.md)

Идентификатор заклинания (spell).

---

### [WishmasterResourceId](/api/types/WishmasterResourceId.md)

Идентификатор ресурса исполнителя желаний.

---