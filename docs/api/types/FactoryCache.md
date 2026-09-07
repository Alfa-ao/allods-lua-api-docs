# FactoryCache

Описание специального кэширующего виджета.

## Кэширующий виджет

Специальный тип виджета. Не имеет соответствующего ресурса и не может быть создан в ресурсной системе, существует только в рантайме. Является максимально облегченной и упрощенной реализацией Widget. Единственное назначение - хранение временно неиспользуемых динамических виджетов.

Особенности:

- Может существовать один экземпляр данного виджета на аддон. Получается / создается с помощью `mainForm:GetFactoryCache()`
- Невидим, не имеет имени, недоступен для реакций, не участвует в обходе дерева виджетов и тп.
- Не является виджетом с точки зрения `common.IsWidget()` (имя метатаблицы `FactoryCacheSafe`)
- Поддерживает очень ограниченный набор API (смотри ниже)

Список методов Widget реализованных в FactoryCache:

- [FactoryCache:IsValid](/api/category/widget/FactoryCache/method.IsValid.md)
- [FactoryCache:IsEqual](/api/category/widget/FactoryCache/method.IsEqual.md) - всегда возвращает `false` (метаметод eq реализован, имеет идентичную логику)
- [FactoryCache:GetId](/api/category/widget/FactoryCache/method.GetId.md)
- [FactoryCache:GetInstanceId](/api/category/widget/FactoryCache/method.GetInstanceId.md)
- [FactoryCache:GetName](/api/category/widget/FactoryCache/method.GetName.md) - всегда возвращает `__WidgetCache`
- [FactoryCache:GetParent](/api/category/widget/FactoryCache/method.GetParent.md) - всегда возвращает `nil`
- [FactoryCache:GetDebugInfo](/api/category/widget/FactoryCache/method.GetDebugInfo.md)
- [FactoryCache:AddChild](/api/category/widget/FactoryCache/method.AddChild.md) - имеет упрощенную и оптимизированную реализацию, `noReposition` всегда `true`
- [FactoryCache:CreateChildByDesc](/api/category/widget/FactoryCache/method.CreateChildByDesc.md) - имеет упрощенную и оптимизированную реализацию, `noReposition` всегда `true`, дополнительный параметр `noParent` - не добавлять родителя, использовать только если родитель будет немедленно (в том же кадре) задан через `AddChild`

::: info
Собственных специфических методов не имеет.
:::