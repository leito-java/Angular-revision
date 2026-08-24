# Correction — Tester une erreur HTTP

## Tester le service HTTP

```ts
it('propage une erreur serveur', () => {
  service.getTasks().subscribe({
    error: (error) => expect(error.status).toBe(500),
  });

  const request = http.expectOne('/api/tasks');
  request.flush(
    { detail: 'Erreur de démonstration' },
    { status: 500, statusText: 'Server Error' },
  );
});
```

## Tester le store

Le faux service peut retourner :

```ts
getTasks() {
  return throwError(() => new HttpErrorResponse({ status: 0 }));
}
```

Après création du store :

```ts
expect(store.loading()).toBe(false);
expect(store.error()).toContain("Impossible de joindre l'API");
```

Le service teste le contrat HTTP. Le store teste la traduction de l'erreur en état compréhensible pour l'interface.
